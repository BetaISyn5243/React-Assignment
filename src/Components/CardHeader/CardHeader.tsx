import React from 'react'


const CardHeaderImage =(key:string)=> {

    return React.createElement('div', { className: 'cardHeaderImage' },
React.createElement('img', {style:{width:200,height:200}, alt: 'Avatar', src: `https://avatars.dicebear.com/v2/avataaars/${key}.svg?options[mood][]=happy` }, null)
);}
export default CardHeaderImage
