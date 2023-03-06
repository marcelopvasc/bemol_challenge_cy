import { faker } from '@faker-js/faker'
//import user from '../../fixtures/user.json'
/* eslint-disable no-undef */
/// <reference types="Cypress" />

const baseUrl = Cypress.env('baseUrl_etapa4')
let token = ''
let userId = ''
let productId = ''
const randomName = faker.name.firstName()
const randomEmail = faker.internet.email()
const randomProductName = faker.commerce.productName()

describe('Round 4 ', () => {
  before(() => {
    cy.request('POST', `${baseUrl}/login`, {
      email: Cypress.env('login'),
      password: Cypress.env('pwd')
    }).then((resp) => {
      token = resp.body.authorization
    })
  })

  context('User', () => {
    it('Create new user', () => {
      cy.request('POST', `${baseUrl}/usuarios`, {
        nome: randomName,
        email: randomEmail,
        password: 'teste',
        administrador: 'true'
      }).then((resp) => {
        expect(resp.status).eq(201)
        expect(resp.body.message).eq('Cadastro realizado com sucesso')
        expect(resp.body._id).to.not.be.null
        userId = resp.body._id
      })
    })

    it('Check user created', () => {
      cy.request('GET', `${baseUrl}/usuarios?_id=${userId}`
      ).then((resp) => {
        expect(resp.status).eq(200)
        expect(resp.body.usuarios[0].nome).eq(randomName)
        expect(resp.body.usuarios[0].email).eq(randomEmail)
        expect(resp.body.usuarios[0]._id).eq(userId)
      })
    })
  })

  context('Products', () => {
    it('Create new product', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/produtos`,
        headers: {
          Authorization: token,
          accept: 'application/json'
        },
        body: {
          nome: randomProductName,
          preco: 470,
          descricao: 'Mouse',
          quantidade: 381
        }
      }).then((resp) => {
        expect(resp.status).eq(201)
        productId = resp.body._id
      })
    })

    it('Check product created', () => {
      cy.request('GET', `${baseUrl}/produtos?_id=${productId}`
      ).then((resp) => {
        expect(resp.status).eq(200)
        expect(resp.body.produtos[0]._id).eq(productId)
      })
    })
  })
})
