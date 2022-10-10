import * as functions from "firebase-functions"
import axios from "axios"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const pbpClient = axios.create({
  baseURL: "http://staging-api.poweredbypercent.com/v1/",
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
    const { data } = await pbpClient.post("donation-sessions", {
      organisationId: request.body.organisationId
    })
    functions.logger.info("donationSession:data", {
      data
    })
    response.send(data)
  } catch (e) {
    functions.logger.error("donationSession:catch", {
      err: e
    })
    response.status(500).send({
      error: "something went wrong"
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

