import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Convo.css'
import { addMessage } from '../actions/messageAction'
import { AnalyzeTone } from '../actions/ToneAction'

const Convo = () => {
  const dispatch = useDispatch()
  const text = useSelector((state) => state.Tone)

  const Response = useSelector(state => state.Respond)
  console.log({Response})
  const firstCpuResp = Response[0].computer.response
  console.log("firstCpuResp",firstCpuResp)

  const [input,setInput ] = useState("")
const convo = text.length === 0 ? {} : text
return (
<>
        <div className="con">
          {Response.map(convo => {
            return (
          <div className="Ai">
                <>
                  <h3>
                    {convo.computer.response}
                    <FontAwesomeIcon className="bot" icon="robot" size="1x" />
                  </h3>
                </>
          </div>
            )
          })}

          <div className="Person" id="person">
              <h3><FontAwesomeIcon className="user" icon="user" size="1x" />
                {text.map.length !== 0 &&text.map(messages => messages.userMessage)}
              </h3>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Chat" onChange={(e) => setInput( e.target.value)}/>
          <button type='submit' className="send" onClick={(e) => AnalyzeTone(dispatch, input)}>
            <FontAwesomeIcon icon="paper-plane" size="2x" />
          </button>
        </div>
      </>
    );
};

export default Convo;
