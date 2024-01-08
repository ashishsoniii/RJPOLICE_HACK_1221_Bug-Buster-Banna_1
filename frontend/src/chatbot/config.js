import { createChatBotMessage } from "react-chatbot-kit";
import Queries from "./Queries";
import LinkList from "./LinkList";

const config = {
    botName: "Sudo",
    initialMessages: [createChatBotMessage("Hello नागरिक! Please provide your query below"), {
        widget: "Queries",
    },
    ],

    widgets: [
        {
            widgetName: "Queries",
            widgetFunc: (props) => <Queries />,
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Introduction to JS",
                        url:
                            "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                        id: 1,
                    },
                    {
                        text: "Mozilla JS Guide",
                        url:
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 2,
                    },
                    {
                        text: "Frontend Masters",
                        url: "https://frontendmasters.com",
                        id: 3,
                    },
                ],
            },
        },
    ],
}

export default config