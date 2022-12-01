// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './test.module.css'
import Icon from '../components/icon'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.center_center}>
      <h1 className={styles.title}>
      We already told you, this is <b><i>"not"</i></b> a test.
    </h1>
    <Icon></Icon>
    <Link to="/"><button type="button">Back to the test</button></Link>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage