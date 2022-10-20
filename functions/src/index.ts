import * as functions from "firebase-functions"
import fireAdmin from "firebase-admin"
import axios, { AxiosError } from "axios"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const admin = fireAdmin.initializeApp()

const pbpClient = axios.create({
  baseURL: functions.config().pbp.baseurl,
  headers: {
    authorization: functions.config().pbp.sk
  }
})

const app = express()

app.use(cors({
  origin: "*"
}))

app.use(bodyParser.json())

app.get("/health", (_, res) => {
  res.send({
    status: "up"
  })
})

app.post("/donation-sessions", async (request, response) => {
  functions.logger.info("donationSession:received", request.body, request.body.organisationId)
  if (!request.body.organisationId) {
    response.status(400).send({
      error: "no organisationId provided"
    })
  }
  try {
    const { successUrl } = request.body
    const { data } = await pbpClient.post("donation-sessions", {
      organisationId: request.body.organisationId,
      language: "en-GB",
      ...successUrl && { successUrl }
    })
    functions.logger.info("donationSession:data", {
      data,
      baseURL: functions.config().pbp.baseurl,
      authorization: functions.config().pbp.sk
    })
    response.send(data)
  } catch (err) {
    functions.logger.error("donationSession:catch", {
      err,
      responseData: (err as AxiosError).response?.data
    })
    response.status(500).send({
      error: "something went wrong"
    })
  }
})

app.post("/webhook-handler", async (req, res) => {
  try {
    const {
      id, firstName, amount, currencyCode, metadata, createdAt, organisationId, anonymous
    } = req.body.data.eventData
    await admin.firestore().collection("donations").doc(id).set({
      id, firstName, amount, currencyCode, metadata, createdAt, organisationId, anonymous
    })
  } catch (e) {
    functions.logger.error("webhook-handler:error", e)
    res.status(400).send({
      error: "bad request"
    })
  }
})

app.use((req, res) => {
  functions.logger.info("notfound:error", req.path)
  res.status(404).send({
    error: "not found"
  })
})

export const api = functions.https.onRequest(app)

