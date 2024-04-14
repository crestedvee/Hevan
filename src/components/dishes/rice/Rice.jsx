import './Rice.scss';

const Rice = () => {
  return (
    <div className='riceCat'>
    <h4>Rice</h4>
    <div className='riceCatDet'>
      <img src={require('../../../assets/whiteRice.jpeg')} alt='rice'/>
      <p>
      Rice is a staple food in Nigeria, and it plays a significant
        role in the country's diet and economy. Nigeria is one of the
        largest consumers of rice in Africa, and well known for their
        various recipes of rice. Expand to view.
      </p>
    </div>
    <details>
      <summary>
        View Recipes
      </summary>
      <div className='dishes'>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/jollof5.webp')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h5>
            Jollof Rice
          </h5>
          <p>
            This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/frRice.webp')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Fried Rice
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/coRice.webp')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Coconut Rice
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/pRice.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Palm Oil Rice
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/riceStew.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            White Rice and Stew
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/riceBStew.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            White Rice/Beans and Stew
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/riceB.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Rice and Beans
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
      </div>
    </details>
  </div>
  );
}

export default Rice;