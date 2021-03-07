import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const samplesList = [
  {
    name: 'Youtube (wetest1) video session sequence',
    category: 'VideoId recommendation in different navigation steps — 17966 records, 1.3Mb',
    url: './sample-datasets/wetest1-session-v7.csv',
    delimiter: ',',
  },

  {
    name: 'Youtube (wetest1) video session sequence',
    category: 'VideoId recommendation in different navigation steps — 41033 records, 15Mb',
    url: './sample-datasets/wetest1-home-v8.csv',
    delimiter: ',',
  },

  {
    name: 'PornHub algorithm analysis: video recommendation',
    category: 'From potest1, see how recommendation changes  — 9060 records, 4.1Mb',
    url: './sample-datasets/potest1-video-v3.csv',
    delimiter: ',',
  },

  {
    name: 'PornHub algorithm analysis: home recommendation',
    category: 'Work in progress — 38327 records, 19Mb',
    url: './sample-datasets/potest2-phase1-collection1.csv',
    delimiter: ',',
  },
]
export default function DataSamples({ onSampleReady, setLoadingError }) {
  const select = async (sample) => {
    const { delimiter, url } = sample
    let response
    try {
      response = await fetch(url)
    } catch (e) {
      setLoadingError('Loading error. ' + e.message)
      return
    }
    const text = await response.text()
    onSampleReady(text, delimiter)
    setLoadingError(null)
  }
  return (
    <Row>
      {samplesList
        // sort by category name
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((d, i) => {
          return (
            <Col xs={6} lg={4} xl={3} key={i} style={{ marginBottom: 15 }}>
              <Card
                onClick={() => {
                  select(d)
                }}
                className="cursor-pointer h-100"
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="">
                    <h2 className="">{d.name}</h2>
                  </Card.Title>
                  <Card.Subtitle className="mt-auto">
                    <h4 className="m-0">{d.category}</h4>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
    </Row>
  )
}
