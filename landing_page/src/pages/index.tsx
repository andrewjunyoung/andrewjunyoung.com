import * as React from "react"
import { Link } from "gatsby"
import { Container, Themed, Link as TLink } from "theme-ui"
import Header from "@lekoarts/gatsby-theme-emilia/src/components/header"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emilia/src/components/seo"

const Index = () => (
  <Layout>
    <Seo title="Home page" />
    <Header />
  </Layout>
)

export default Index
