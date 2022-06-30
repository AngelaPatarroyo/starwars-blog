import React from "react";


const Characters = () => {
  return (
    <div clasName="container mt-4 bg-primary">
      <div clasName="d-flex flex-row">
        <div clasName="col-6">
          <img
            src="https://imgflip.com/s/meme/Futurama-Fry.jpg"
            heigth="500"
            width="500"
          />
        </div>
        <div clasName="col-6">
          <h2>Martin Coimbra</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <div>
            <p>Name</p>
            <p></p>
          </div>
          <div>
            <p>Birth Year</p>
            <p></p>
          </div>
          <div>
            <p>Gender</p>
            <p></p>
          </div>
          <div>
            <p>Heigth</p>
            <p></p>
          </div>
          <div>
            <p>Skin Color</p>
            <p></p>
          </div>
          <div>
            <p clasName="btn btn-primary">Eye Color</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export {Characters}