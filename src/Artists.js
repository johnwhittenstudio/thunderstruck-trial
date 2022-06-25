import icon7 from './icon/07.png';

const Artists = () => {
  return ( 
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
    <div className="artists">
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
          <div className="card-body">
            <div class="row">
            <img 
            src={icon7} 
            width="30"
            height="30"
            className="artistIcon"
            alt="TS About logo"
            />
            <h3><strong>Dr. Jessi DiTillio</strong></h3>
            <h5><em>Los Angeles, California</em></h5>
            </div>
          </div>
      </div>
    
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="card-body">
          <div class="row">
          <img 
            src={icon7} 
            width="30"
            height="30"
            className="artistIcon"
            alt="TS About logo"
            />
            <h3><strong>Ashlin Aronin</strong></h3>
            <h5><em>Portland, Oregon</em></h5>
          </div>
        </div>
      </div>

      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="card-body">
          <div class="row">
            <img 
            src={icon7} 
            width="30"
            height="30"
            className="artistIcon"
            alt="TS About logo"
            />
            <h3><strong>Rosana Aviña-Beam</strong></h3>
            <h5><em>Portland, Oregon</em></h5>
          </div>
        </div>
      </div>

      <h2>Robert Collier Beam</h2>
      <h2>Kristin Hough</h2>
      <h2>Morgan Rosskopf</h2>
      <h2>Katherine Spinella</h2>
      <h2>Michael E Stephen</h2>
      <h2>John Whitten</h2>
    </div>
    </div>
  );
}

export default Artists;