import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/actions'
import { BoxCtn, BoxImage, BoxInfo, DetailBox, Loading } from '../styles/Styles'

function Detail() {
  const [isLoading, setIsLoading] = useState(true)

  const {id} = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.detail)

  useEffect(() => {
    return (async () => {
      await dispatch(getProduct(id))
      setIsLoading(false)
    })()
  }, [])

  return (
    <BoxCtn>
      {isLoading ? <Loading>Data Loading...</Loading>
      :
      <DetailBox>
        <BoxImage imgSize='400'>
          <img src={detail.imgUrl} alt="" />
        </BoxImage>
        <BoxInfo align='flex-start'>
          <h2>{detail.name}</h2>
          <p>Price: ${detail.price} COP</p>
          <p>Amount: {detail.size}</p>
          <p>Description: {detail.description}</p>
          <p>Full Description:</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas suscipit laudantium sed dolore natus autem repellat, reiciendis perferendis magnam expedita ad neque ex dicta, veritatis sunt velit in, commodi ullam.</p>
        </BoxInfo>
      </DetailBox>
      }
    </BoxCtn>
  )
}

export default Detail