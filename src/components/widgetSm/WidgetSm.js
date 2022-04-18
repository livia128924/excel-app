import "./widgetSm.css";
import  Visibility  from "@mui/icons-material/Visibility";

export default function WidgetSm(props) {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Media da turma</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
      
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Adriano</span>
            <span className="widgetSmUserTitle"></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
       
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Bruno</span>
            <span className="widgetSmUserTitle"></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Carlos</span>
            <span className="widgetSmUserTitle"></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Daniel</span>
            <span className="widgetSmUserTitle"></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
     
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Flávia</span>
            <span className="widgetSmUserTitle"></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
     
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Laís</span>
            <span className="widgetSmUserTitle"></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
           dsdsd
          </button>
        </li>
      </ul>
    </div>
  );
}