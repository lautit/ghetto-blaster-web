import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

const SocialPage = ({ data: { allInstaNode } }) => {
    <Layout>
        {}
    </Layout>
};

export const pageQuery = graphql`
         query IndexQuery {
           allInstaNode(filter: { username: { eq: "ghettoblasterfamilia" } }) {
             edges {
               node {
                 id
                 username
                 likes
                 caption
                 comments
                 localFile {
                   childImageSharp {
                     fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                       ...GatsbyImageSharpFluid_withWebp
                     }
                   }
                 }
               }
             }
           }
         }
       `;

export default SocialPage;