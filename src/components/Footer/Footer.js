import React from 'react'
import styles from './Footer.module.scss'
import { Row, Col, Container } from 'react-bootstrap'
// import { BsFillEnvelopeFill, BsBarChartFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
    <Container fluid style={{ backgroundColor: 'var(--dark)' }}>
      <Container className={styles.footer}>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <p className="Xsmall">
              This is RAWGraphs by {' '}
              <a
                href="http://densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DensityDesign
              </a>
              ,{' '}
              <a
                href="https://calib.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calibro
              </a>{' '}
              and{' '}
              <a
                href="https://inmagik.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inmagik
              </a>
              . Software under {' '}
              <a href="https://github.com/rawgraphs/rawgraphs-app/blob/master/LICENSE.txt">
                (Apache License 2.0)
              </a> © 2013-2021
                — Integrated in {' '}<a href="https://tracking.exposed">Tracking Exposed</a> as implemented in {' '}
              <a href="https://github.com/tracking-exposed/rawgraphs-app/">our fork</a> <FaGithub />.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
