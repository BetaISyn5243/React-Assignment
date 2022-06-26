import React, { useState } from 'react'
import { Col, Card, } from "antd";
import './CardsView.css'
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

import ModalEditCard from '../../Components/ModalEditCard/ModalEditCard';
import { ICardModel } from '../../Models/CardsModel';
import CardHeaderImage from '../../Components/CardHeader/CardHeader';
import CardActions from '../../Components/CardActions/CardActions';

export default function Cards(Props: ICardModel) {
// TODO: To expensive convert with memo and effect
  const [name, setName] = useState(Props.name);
  const [email, setEmail] = useState(Props.email);
  const [website, setWebsite] = useState(Props.website);
  const [phone, setPhone] = useState(Props.phone);
  const [active, setActive] = useState(false);
  const [liked, setLiked] = useState(false)
  const [isAlive, setIsAlive] = useState(true);

  function activateModal() {
    setActive(true);
  };
  function closeModal() {
    setActive(false);
  };
  function changeUserDetails(newUser: ICardModel) {
    setName(newUser.name);
    setEmail(newUser.email);
    setPhone(newUser.phone);
    setWebsite(newUser.website);
    closeModal();
  };
  let tempUser = { name: name, email: email, website: website, phone: phone }
  if(isAlive){
    return (
      <>
        <ModalEditCard user={tempUser} Active={active} changeUserDetails={changeUserDetails} close={closeModal}></ModalEditCard>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <Card bodyStyle={{ color: '#646464', display: 'flex', flexDirection: 'column', lineHeight: '15px' }} bordered={true} style={{ margin: 15 }} cover={CardHeaderImage(name)} actions={[<div onClick={()=>setLiked(!liked)}>{!liked?CardActions.Like:CardActions.LikeActive}</div>, <div onClick={()=>activateModal()}>{CardActions.Edit}</div>, <div onClick={()=>setIsAlive(false)}>{CardActions.Thrash}</div>]} >
            <h3>{name}</h3>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}><MailOutlined style={{ fontSize: '18px' }} /> <p style={{ marginLeft: 10, display: 'flex', verticalAlign: 'center', marginTop: '0.5em', marginBottom: '0.5em' }}>{email}</p></div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}><PhoneOutlined style={{ fontSize: '18px' }} /> <p style={{ marginLeft: 10, display: 'flex', verticalAlign: 'center', marginTop: '0.5em', marginBottom: '0.5em' }}>{phone}</p></div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}><GlobalOutlined style={{ fontSize: '18px' }} /> <p style={{ marginLeft: 10, display: 'flex', verticalAlign: 'center', marginTop: '0.5em', marginBottom: '0.5em' }}>http://{website}</p></div>
          </Card>
        </Col>
      </>
    )
  }else{
    return (<></>);
  }

}
