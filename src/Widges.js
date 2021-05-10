import React from 'react'
import './Widges.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



const Widges = () => {

    const newsArticle = ( heading, subtitle) => (
        <div className="widges__article">
            <div className="widges__left">
                <FiberManualRecordIcon />
            </div>
            <div className="widges__right">
               <h4>{heading}</h4>
               <p>{subtitle}</p> 
            </div>
        </div>

    );
    return (
        <div className="widges">
            <div className="widges__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
        
         
          {newsArticle("Corona virus Update: Germany", "Top news - 9866 readers")}
          {newsArticle("Heavy snofall in Bavaria: Germany", "Weather - 9832 readers")}
          {newsArticle("Messi is on fire", "Sports - 2366 readers")}
          {newsArticle("Microsoft announce a new product", "Tec news - 1266 readers")}
          {newsArticle("A Meditedian diet for healty living", "Health - 9866 readers")}
          {newsArticle("BMW launches iM49-All Electric", "Cars and Auto - 9866 readers")}
          {newsArticle("Space-X makes a new deal with a German robot company", "Tec - 9866 readers")}
        </div>
    );
}

export default Widges;
