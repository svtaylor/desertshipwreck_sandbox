import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import paragraphs from 'lines-to-paragraphs'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
<div>
<section>
  <h1
    className="site-title has-text-centered"
    style={{
      color: '#303030',
      lineHeight: '1',
    }}
  >
    {title}
  </h1>
  {/*<p
    className="separator"
    style={{
      fontSize: '2em',
      lineHeight: '1',
    }}
  >
    est. 2020
  </p>*/}
  <hr     
    style={{
      color: 'pink',
      margin: 'auto',
      width: '50%',
    }}/>

  <h3
    className='site-subtitle has-text-centered'
    style={{
      color: '#606060',
      lineHeight: '1',
    }}
  >
    {subheading}
  </h3>
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${
      !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`,
    }}
  >
  </div>
</section>

<section className="section section--gradient">
  <div className="container">

      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">

              <div className="tile">
                <h1 className="title">{mainpitch.title}</h1>
              </div>
              <div 
                className="tile"
                dangerouslySetInnerHTML={{ __html: paragraphs(mainpitch.description) }}
              />

          </div>
        </div>
      </div>
 
  </div>
</section>

<section className=''>
  <div className="column is-12">
    <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
      Latest stories
    </h3>
    <div className="container">
      <div className="content" style={{marginTop: '1rem'}}>
        <BlogRoll />
      </div>
    </div>
  </div>
  <div className="column is-12 has-text-centered">
    <Link className="btn" to="/blog">
      Read more
    </Link>
  </div>
  <br />
  <br />
</section>
</div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
