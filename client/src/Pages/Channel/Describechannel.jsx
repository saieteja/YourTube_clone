import React,{ useEffect } from 'react'
import './Describechannel.css'
import {FaEdit,FaUpload} from "react-icons/fa"
import {  useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getpoints } from '../../action/points'
const Describechannel = ({setvideouploadpage,cid,seteditcreatechanelbtn}) => {
  const dispatch = useDispatch()
  const userid = useParams()
  // const channel=[
  //   {
  //       _id:1,
  //       name:"abcjabsc",
  //       email:"abcd@gmail.com",
  //       joinedon:"222-07-134",
  //       desc:"bithead"
  //   }
  // ]
const channel=useSelector(state=>state.chanelreducer)
const currentuser=useSelector(state => state.currentuserreducer);
const pointsdata = useSelector(state => state.pointsreducer.data)
useEffect(() => {
  if (userid){
    
    dispatch(getpoints(userid.cid))}
}, [userid.cid]
)
const currentchannel=channel.filter((c)=>c._id=== cid)[0]
// console.log(currentchannel)
  return (
    <>
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        <b>{currentchannel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currentchannel?.name}</b>
        <p>{currentchannel?.desc}</p>
      </div>
      {currentuser?.result._id === currentchannel?._id &&(
        <>
        <p className="editbtn_chanel" onClick={()=>seteditcreatechanelbtn(true)}>
          <FaEdit/>
          <b>Edit Channel</b>
        </p>
        <p className="uploadbtn_chanel" onClick={()=>setvideouploadpage(true)}>
          <FaUpload/>
          <b>Upload Video</b>
        </p>
        </>
      )}
    </div>
    <div className="Points_container">
      <h2>Points: {pointsdata?.data?.points ?? 0}</h2>
    </div>
    </>
  )
}

export default Describechannel