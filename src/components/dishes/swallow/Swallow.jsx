import './Swallow.scss';

const Swallow = () => {
  return (
    <div className='swallow'>
      <h3>
        Swallows
      </h3>
      <hr/>
      <div className='dishes'>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/eba.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Eba
          </h4>
          <p>
            This is a popular Nigerian soup mostle know as ofe aku, which can be served with eba(fried cassava flour),
            fufu/akpu(fermented cassava), pounded yam, plantain floor etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/poundo.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Pounded Yam
          </h4>
          <p>
            This is a popular Nigerian soup mostle know as ofe aku, which can be served with eba(fried cassava flour),
            fufu/akpu(fermented cassava), pounded yam, plantain floor etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/fufu.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            FuFu
          </h4>
          <p>
            This is a popular Nigerian soup mostle know as ofe aku, which can be served with eba(fried cassava flour),
            fufu/akpu(fermented cassava), pounded yam, plantain floor etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/amala.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Amala
          </h4>
          <p>
            This is a popular Nigerian soup mostle know as ofe aku, which can be served with eba(fried cassava flour),
            fufu/akpu(fermented cassava), pounded yam, plantain floor etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Swallow;