import { FunctionComponent } from "react";

export const PageCardSmall: FunctionComponent<{
  title: string;
  description: string;
  imageUrl: string;
}> = ({ title, description, imageUrl }) => (
  <>
    <div className="PageCardSmall">
      <img className="PageCardSmall_image" src={imageUrl} alt="" />
      <div className="PageCardSmall_Content">
        <p className="PageCardSmall_Title">{title}</p>
        <p className="PageCardSmall_Description">{description}</p>
      </div>
    </div>
    <style jsx>{`
      p {
        margin: 0;
      }
      .PageCardSmall {
        padding: 10px 20px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px;

        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 20px;
        &_image {
          width: 100px;
          height: 100%;
          object-fit: contain;
        }
        &_Content {
          display: grid;
          grid-template-columns: 1fr;
          color: rgba(0, 0, 0, 0.5);
        }
        &_Title {
        }
        &_Description {
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    `}</style>
  </>
);
