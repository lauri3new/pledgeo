import { db } from "../capabilities/firebase"

export const getDonations = ({
  id,
  limit = 25
  // startAfter
}: {
  id: string
  limit?: number
  lastSeenCreatedAt?: string
}) => db.collection('donations')
  .where('organisationId', '==', id)
  .orderBy('createdAt', 'desc')
  .limit(limit)
  .get()
//  .startAfter(lastSeenCreatedAt)