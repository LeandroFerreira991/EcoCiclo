import React from "react";
import { Container } from "react-bootstrap";

const ChatBot: React.FC = () => {
  return (
    <Container>
      <div className="w-75 mx-auto pt-5">
        {/* <h2> Tire suas dúvidas de forma simples e fácil, acesse o chat (este vai para a pagina inicial)</h2> */}
        <iframe
          src="https://web.powerva.microsoft.com/environments/Default-36eb6eec-c872-4166-b580-b9762f04179f/bots/new_bot_08668c3d470a471692ad9e04858ea1c7/webchat"
          allowFullScreen
          style={{ width: "100%", height: "700px", border: "1px solid black" }}
        ></iframe>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossOrigin="anonymous"
      ></script>
    </Container>
  );
};

export default ChatBot;