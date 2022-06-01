import React from "react";
import styled from "styled-components";

const FeaturedPhotoCom = ({ el }) => {

  return (
    <Container>
      <div className='cards'>
        <div className='card-image'>
          <img className="image" src={el.image} alt="Photo" />
          <div class="overlay">
            <a href="#" class="icon" title="User Profile">
              <i class="fa fa-search"></i>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center hh bg-transparent">
          <h4 className='text-uppercase'>{el.name}</h4>
          <p>{el.price}$</p>
        </div>

      </div>
    </Container>
  )
}

const Container = styled.div`
    .cards{
      margin: auto;
      width: 100%;
    }
    .card-image{
      position: relative;
      width: 100%;
      height: 350px;
      overflow: hidden;
      &:hover .overlay {
        opacity: 0.5;
      }
    }
    .image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
    .overlay {
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       opacity: 0;
       transition: .5s ease;
       background: grey;
       border-radius: 5px;
    }
          

          
    .icon {
      background-color: #AB7A5F;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: white;
      font-size: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }
          
    .fa-search:hover {
      color: #fff;
    }

    .hh {
      height: 60px;
    }
`

export default FeaturedPhotoCom;