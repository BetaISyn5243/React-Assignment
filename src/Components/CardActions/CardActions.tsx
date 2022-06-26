import { DeleteFilled, EditOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import React from 'react'

const LikeActive = React.createElement('button',{style:{background: 'none',border:'none',cursor:'pointer',outline:'none'}},<HeartFilled style={{color:'red',fontSize:'20px'}}/>)
const Like = React.createElement('button',{ style:{background: 'none', border: 'none', cursor: 'pointer', outline: 'none',}},<HeartOutlined style={{color:'red',fontSize:'20px'}} />  )
const Edit = React.createElement('button',{style:{background: 'none', border: 'none', cursor: 'pointer', outline: 'none',}},<EditOutlined style={{fontSize:'20px'}} />  )
const Thrash = React.createElement('button',{style:{background: 'none', border: 'none', cursor: 'pointer', outline: 'none',}},<DeleteFilled style={{fontSize:'20px'}} />  )

const CardActions={ Like, LikeActive, Edit, Thrash}
export default CardActions;

