import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  const navigateByUrl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt doloremque eum odio delectus sunt nihil voluptatibus asperiores natus tempora! Beatae doloremque necessitatibus sed in eaque dicta ab consectetur tempore?
        Quibusdam eaque expedita quae ut nostrum ipsum, harum beatae aperiam? Dolorum eveniet velit vel at, autem a iure perspiciatis, minus reiciendis tenetur dolores non temporibus ea voluptatibus fuga atque nesciunt.
        Facere inventore eum incidunt tempora enim repellendus aspernatur dignissimos ut sint, maxime non deserunt facilis nobis esse. Fugiat inventore, aperiam dolorum illo sed, ratione exercitationem placeat similique, praesentium itaque temporibus.</p>
        <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
        </Col>
        <Col lg={5}><img src="https://media.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" alt="" /></Col>
        <Col></Col>

      </Row>

      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>

        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
        <Card style={{ width: '18rem' }} className='bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" />
        <Card.Body>
          <Card.Title>Categorized Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://4.bp.blogspot.com/-N_y5_ZlCH2w/Wt6CoGNBwrI/AAAAAAAAFNI/iI7ghclNl4wFmYwzI-Q2ULo45aPNHhtCgCEwYBhgL/s640/audio_animatio_dribbble.gif" />
      <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        </div>

        <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">
          <div className='col-lg-5'>
            <h4 className='text-warning'>Simple ,Powerful & Fast</h4>
            <h6><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iusto? Illo temporibus, quae natus, reiciendis fugit laudantium asperiores deleniti adipisci neque aliquam magni id quisquam saepe officia sit in animi!
            Illum quisquam at iure dolor, aliquam id! Exercitationem dignissimos porro officiis, sunt tenetur aut distinctio quos ad! Enim tempore in amet dolor, nostrum deserunt dolores vitae nemo atque? At, veritatis!</h6>
            <h6><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iusto? Illo temporibus, quae natus, reiciendis fugit laudantium asperiores deleniti adipisci neque aliquam magni id quisquam saepe officia sit in animi!
            Illum quisquam at iure dolor, aliquam id! Exercitationem dignissimos porro officiis, sunt tenetur aut distinctio quos ad! Enim tempore in amet dolor, nostrum deserunt dolores vitae nemo atque? At, veritatis!</h6>
            <h6><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iusto? Illo temporibus, quae natus, reiciendis fugit laudantium asperiores deleniti adipisci neque aliquam magni id quisquam saepe officia sit in animi!
            Illum quisquam at iure dolor, aliquam id! Exercitationem dignissimos porro officiis, sunt tenetur aut distinctio quos ad! Enim tempore in amet dolor, nostrum deserunt dolores vitae nemo atque? At, veritatis!</h6>
          </div>

          <div className='col-lg-5 ms-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a3Ue-LN5B9U?si=KCsOC-7m6VOo48uC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
      
    </>
  )
}

export default Landingpage
