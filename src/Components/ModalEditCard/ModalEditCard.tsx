import { Form, Input, Modal } from 'antd'
import React from 'react'
import { ICardModel } from '../../Models/CardsModel'
interface IModalEditCard{
    user:ICardModel
    Active:boolean,
    close:Function,
    changeUserDetails:Function,
}
export default function ModalEditCard( Props:IModalEditCard) {
  let tempUser:ICardModel ={
    name: Props.user.name,
    email: Props.user.email,
    phone: Props.user.phone,
    website: Props.user.website
  }
  function handleNameChange(event:React.ChangeEvent<HTMLInputElement>) {
    tempUser.name = event.target.value;
  }
  function handleEmailChange(event:React.ChangeEvent<HTMLInputElement>) {
    tempUser.email = event.target.value;
  }
  function handlePhoneChange(event:React.ChangeEvent<HTMLInputElement>) {
    tempUser.phone = event.target.value;
  }
  function handleWebsiteChange(event:React.ChangeEvent<HTMLInputElement>) {
    tempUser.website = event.target.value;
  }
  return (
    <Modal title={"Basic Modal"} visible={Props.Active} onOk={
      ()=>{Props.changeUserDetails(tempUser)}
      } closable={true} onCancel={()=>Props.close()} destroyOnClose={true} > 
    <Form initialValues={{
        'name':Props.user.name,
        'email':Props.user.email,
        'phone':Props.user.phone,
        'website':Props.user.website,
    }}>
      <Form.Item label="Name" name='name' labelCol={{span:8}} rules={[{required:true,message:'This field is required'}]}>
        <Input onChange={handleNameChange} ></Input>
      </Form.Item>
      <Form.Item label="Email" name='email' labelCol={{span:8}} rules={[{required:true,message:'This field is required'}]}>
        <Input onChange={handleEmailChange}></Input>
      </Form.Item>
      <Form.Item label="Phone" name='phone' labelCol={{span:8}} rules={[{required:true,message:'This field is required'}]}>
        <Input onChange={handlePhoneChange} ></Input>
      </Form.Item>
      <Form.Item label="Website" name='website' labelCol={{span:8}} rules={[{required:true,message:'This field is required'}]}>
        <Input onChange={handleWebsiteChange}></Input>
      </Form.Item>
    </Form>
  </Modal>
  )
}
