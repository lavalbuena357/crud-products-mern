import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Section, Container, Card, Content, Columns, Heading } from 'react-bulma-components'
import { getProduct } from '../../redux/actions'

function Product({ match, getProduct, detail }) {
  const { params } = match

  useEffect(() => {
    getProduct(params.id)
  })

  return (
    <Section>
      <Container>
        <Columns>
          <Columns.Column size={4} offset={4}>
            <Link to='/'>
              <span>Atras</span>
            </Link>
            <Card>
              <Heading className='title has-text-centered'>{detail && detail.name}</Heading>
              <Card.Image src={detail && detail.imgUrl} size='4by3' />
              <Card.Content>
                <Content>
                  <p>Price: ${Intl.NumberFormat().format(detail && detail.unitaryPrice)} COP</p>
                  <p>Short description: {detail && detail.description}</p>
                  <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores aliquid 
                    aperiam minus blanditiis incidunt cum quia consectetur, et ullam itaque praesentium quasi unde 
                    omnis deserunt. Sapiente ipsa vitae a?</p>
                  <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores aliquid 
                  aperiam minus blanditiis incidunt cum quia consectetur, et ullam itaque praesentium quasi unde 
                  omnis deserunt. Sapiente ipsa vitae a?</p>
                </Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
       
      </Container>
    </Section>
  )
}

function mapStateToProps(state) {
  return {
    detail: state.detail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: (id) => dispatch(getProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)