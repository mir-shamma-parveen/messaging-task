import React from "react";
import MessageSidePanel from "./SidePanel";
import "./Message.css";
const Message = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
    const [messageList, setIsMessageList] = React.useState([
        {
            "id": "1",
            "messageTitle": "Lorem Ipsum dolor sit",
            "phone": "+91-98300-98300",
            "date": "10/28/2021",
            "count": 1,
            "isFlagged": true
        },
        {
            "id": "2",
            "messageTitle": "Lorem Ipsum dolor",
            "phone": "+91-98300-98300",
            "date": "10/27/2021",
            "count": 1,
            "isFlagged": true,
        },
        {
            "id": "3",
            "messageTitle": "amet edificing elit consetature",
            "phone": "+91-98300-98300",
            "date": "09/28/2021",
            "count": 1,
            "isFlagged": true
        }
    ]);
    const [searchValue, setSearchValue] = React.useState("");
    const [flagList, setFlagList] = React.useState([]);
    const [deletemsgList, setdeleteMsgList] = React.useState([]);
    const [isSearch, setSearch] = React.useState(true);
    const searcDelMessage = () => {
        setSearchValue("");
        setIsMessageList([
            {
                "messageTitle": "Lorem Ipsum dolor sit",
                "phone": "+91-98300-98300",
                "date": "10/28/2021",
                "count": 1,
                "isFlagged": true
            },
            {
                "messageTitle": "Lorem Ipsum dolor",
                "phone": "+91-98300-98300",
                "date": "10/27/2021",
                "count": 1,
                "isFlagged": true,
            },
            {
                "messageTitle": "amet edificing elit consetature",
                "phone": "+91-98300-98300",
                "date": "09/28/2021",
                "count": 1,
                "isFlagged": true
            }
        ]);
        setSearch(true);

    }
    const searchMessage = () => {
        setSearch(false);

        if (searchValue !== "") {
            let copymsg = [...messageList];

            const filteredMessage = copymsg.filter(message => {
                return message.messageTitle.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
            });

            setIsMessageList(filteredMessage)
        }
        else {
            setIsMessageList([
                {
                    "messageTitle": "Lorem Ipsum dolor sit",
                    "phone": "+91-98300-98300",
                    "date": "10/28/2021",
                    "count": 1,
                    "isFlagged": true
                },
                {
                    "messageTitle": "Lorem Ipsum dolor",
                    "phone": "+91-98300-98300",
                    "date": "10/27/2021",
                    "count": 1,
                    "isFlagged": true,
                },
                {
                    "messageTitle": "amet edificing elit consetature",
                    "phone": "+91-98300-98300",
                    "date": "09/28/2021",
                    "count": 1,
                    "isFlagged": true
                }
            ]);
        }

    }



    const setFlag = (message, index) => {
        let copyMsg = [...messageList];
        copyMsg[index].isFlagged = false;
        setIsMessageList(copyMsg);
        let arr = [...flagList];
        arr.push(message);
        setFlagList(arr)
    }
    const setUnFlag = (message, id, index) => {

        let copyMsg = [...messageList];
        copyMsg[index].isFlagged = true;
        setIsMessageList(copyMsg);
        let arr = [...flagList];
        var ind = arr.findIndex(function (element) {
            return element.id === id;
        })
        if (ind !== -1) {
            arr.splice(ind, 1)
        } setFlagList(arr);
    }
    const setUnFlag1 = (message, id, index) => {


        let arr = [...flagList];
        var ind = arr.findIndex(function (element) {
            return element.id === id;
        })
        if (ind !== -1) {
            arr.splice(ind, 1)
        } setFlagList(arr);
    }

    const deletemessage = (message, id, index) => {
        let arr = [...messageList];
        var ind = arr.findIndex(function (element) {
            return element.id === id;
        })
        if (ind !== -1) {
            arr.splice(ind, 1)
        }
        setIsMessageList(arr);
        setUnFlag1(null, id, index);
        const delMsg = [...deletemsgList];
        delMsg.push(message);
        setdeleteMsgList(delMsg);
    }
    return (
        <div className={isDrawerOpen ? "mainMessageWrap" : "mainMessageWrap minimizeMenu"} >
            <MessageSidePanel isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} flagList={flagList} messageList={messageList} deletemsgList={deletemsgList} />
            {/* <MessageBody messageList={messageList}/> */}
            <div className="messageBody">
                <div className="messageBodyTopSection">
                    <div className="messageBodySearch">
                        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        {isSearch ?
                            <div onClick={searchMessage}>
                                <i className="material-icons-outlined searchIcon">
                                    search
                                </i>
                            </div>
                            :
                            <div onClick={searcDelMessage}>
                                <span class="material-icons-outlined searchIcon">
                                    clear
                                </span>
                            </div>
                        }

                    </div>
                </div>
                <div className="messageListingWrap">
                    {messageList.map((message, index) => (

                        <div className="messageItem unread" key={index}>
                            <div className="messageItemBody">
                                <p className="MessageTitle">{message.messageTitle}</p>
                                <p className="contactNo"><span className="material-icons-outlined callIcon">
                                    phone
                                </span>{message.phone}</p>
                                <div className="MessageCounter">{message.count}</div>
                            </div>

                            <div className="messageDate">
                                {message.date}
                                <div className="actionBtnWrap">
                                    {message.isFlagged
                                        ?
                                        <button className="roundedIconBtn" onClick={() => setFlag(message, index)}>
                                            <span className="material-icons-outlined">
                                                outlined_flag
                                            </span>
                                        </button>
                                        :
                                        <button className="roundedIconBtn" onClick={() => setUnFlag(message, message.id, index)}>
                                            <span className="material-icons">
                                                flag
                                            </span>
                                        </button>
                                    }
                                    <button className="roundedIconBtn">
                                        <span className="material-icons-outlined">
                                            report_problem
                                        </span>
                                    </button>
                                    <button className="roundedIconBtn">
                                        <span className="material-icons-outlined" onClick={() => deletemessage(message, message.id, index)}>
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Message;
