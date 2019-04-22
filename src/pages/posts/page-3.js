import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"

const GET_IMAGEDATA = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <h1>Hello from page 3!</h1>
    <h3>Image File Data</h3>
    <StaticQuery 
        query={GET_IMAGEDATA}
        render={data => (
            <table>
                <thead>
                    <tr>
                        <th>Relative Path</th>
                        <th>Size of Image</th>
                        <th>Extensions</th>
                        <th>Birthtime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({node}, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.size}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    />
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)
