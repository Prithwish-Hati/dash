import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skyHBbwlYJAj1WVZ9juPOjFF7t1IJ8qp8nLs6E5N3m3ixF11NCuIcEaYqtLPahUwq9HCshNH8V1IkqYw4phnqpGjtEY0fd04vR2zKQ4KevjDC1SZZP7UrzuDd3xJ7wNDr1Sh5kIFq3g2Wyu2MP2RdoLLwct4uT6ZkmWym0xySaESZqFHlVed",
})
