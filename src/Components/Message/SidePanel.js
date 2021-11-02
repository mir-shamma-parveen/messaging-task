import React from "react";

const MessageSidePanel = (props) => {

    return (

        <div className="messageSidePanel">

            <div className="sidebarHeader">
                <button className="menuBtn" onClick={() => props.setIsDrawerOpen(!props.isDrawerOpen)}>
                    <span className="material-icons-outlined">
                        menu
                    </span>
                </button>
            </div>
            <div className="sidebarBody">

                <div className="sidebarItem active">
                    <button>
                        <i className="material-icons">
                            move_to_inbox
                        </i>

                        <strong>Inbox</strong>
                        <span className="Counter">{props.messageList.length}</span>
                    </button>
                </div>

                <div className="sidebarItem">
                    <button>
                        <i className="material-icons-outlined">
                            outlined_flag
                        </i>

                        <strong>Flagged</strong>
                        {props.flagList.length > 0
                            &&
                            <span className="Counter">{props.flagList.length}</span>
                        }
                    </button>
                </div>

                <div className="sidebarItem">
                    <button>
                        <i className="material-icons-outlined">
                            report_problem
                        </i>

                        <strong>Spam</strong>
                    </button>
                </div>

                <div className="sidebarItem">
                    <button>
                        <i className="material-icons-outlined">
                            delete_outline
                        </i>

                        <strong>Deleted</strong>
                        {props.deletemsgList.length > 0
                            &&
                            <span className="Counter">{props.deletemsgList.length}</span>
                        }


                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageSidePanel;
