// class ProductList extends React.Component {
//     render() {
//         return (
//             <div className='ui unstackable items'>
                
//                 I am a basic React Component
//             </div>
//         );
//     }
// }

// ------------------------------------------------------------------------

/* class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                <Product/>
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='image'>
            <img src='images/products/image-aqua.png' />
          </div>
          <div className='middle aligned content'>
            <div className='description'>
              <a>Fort Knight</a>
              <p>Authentic renaissance actors, delivered in just two weeks.</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src='images/avatars/daniel.jpg'
              />
            </div>
          </div>
        </div>
      );
    }
  } */

// ------------------------------------------------------------------------
/* 
class ProductList extends React.Component {
    render() {
        const product = Seed.products[0];
        return (
            <div className='ui unstackable items'>
                <Product
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                />
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl}/>
          </div>
          <div className='middle aligned content'>
          <div className='header'>
            <a><i className='large caret up icon'/></a>
            {this.props.votes}
          </div>
            <div className='description'>
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  } */

// ------------------------------------------------------------------------
  
/* class ProductList extends React.Component {
    render() {
        const productComponents = Seed.products.map((product) => (
            <Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl}/>
          </div>
          <div className='middle aligned content'>
          <div className='header'>
            <a><i className='large caret up icon'/></a>
            {this.props.votes}
          </div>
            <div className='description'>
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  } */

// ------------------------------------------------------------------------

/*   class ProductList extends React.Component {
    render() {
        const products = Seed.products.sort((a,b) => ( // never mutable the data . Bad practice
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl}/>
          </div>
          <div className='middle aligned content'>
          <div className='header'>
            <a><i className='large caret up icon'/></a>
            {this.props.votes}
          </div>
            <div className='description'>
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  } */

// ------------------------------------------------------------------------

/*   class ProductList extends React.Component {
    handleProductUpVote(productId) {
        console.log(productId + 'was upvoted');
        
    }
    render() {
        const products = Seed.products.sort((a,b) => ( 
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onVote = {this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component { // Component based class
    constructor(props) {
        super(props); // to gathers data from parent as props should be available inside the component
        this.handleUpVote = this.handleUpVote.bind(this); // to ensure that 'this' keyword points to component
    }
    handleUpVote(){
        this.props.onVote(this.props.id);
    }
    render() { // change in props or state  // by default render() function maps this keyword with component
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl}/>
          </div>
          <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}><i className='large caret up icon'/></a>
            {this.props.votes}
          </div>
            <div className='description'>
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  } */

// ------------------------------------------------------------------------

/*   class ProductList extends React.Component {
    constructor(props) {
      super(props); // to gathers data from parent as props should be available inside the component;
      // In this case Seed is treated as Parent; Infact all component will have this line of code
      this.state = {
        products: []
      };

      this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    componentDidMount() {
      this.setState({products: Seed.products });  //state change can be done only using setState()
    }
    handleProductUpVote(productId) {
        console.log(productId + 'was upvoted');
        // This block of code will not work as state is immutabe
        // const productsPointer = this.state.products;
        // productsPointer.forEach((product) => {
        //   if(product.id === productId) {
        //     product.votes = product.votes + 1;
        //   }
        // });
        // this.setState({
        //   products: productsPointer,
        // });

        const nextProducts = this.state.products.map((product) => {
          if(product.id === productId){
            return Object.assign({}, product, {   // Object.assign(target, source)
              votes: product.votes + 1,
            });
          } else {
            return product;
          }
        });
        this.setState({
          products: nextProducts
        })
    }

    render() { // invoked when state change
        const products = this.state.products.sort((a,b) => ( 
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onVote = {this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component { // Component based class
    constructor(props) {
        super(props); // to gathers data from parent as props should be available inside the component
        this.handleUpVote = this.handleUpVote.bind(this); // to ensure that 'this' keyword points to component
    }
    handleUpVote(){
        this.props.onVote(this.props.id);
    }
    render() { // render() is invoked when there is change in props or state  // by default render() function maps 'this' keyword with component
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl}/>
          </div>
          <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}><i className='large caret up icon'/></a>
            {this.props.votes}
          </div>
            <div className='description'>
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  } */

// ------------------------------------------------------------------------

  class ProductList extends React.Component {
    // constructor(props) {
    //   super(props); // to gathers data from parent as props should be available inside the component;
    //   // In this case Seed is treated as Parent; Infact all component will have this line of code
    //   this.state = {
    //     products: []
    //   };

    //   this.handleProductUpVote = this.handleProductUpVote.bind(this);
    // }
    state= {
      products: []
    }
    componentDidMount() {
      this.setState({products: Seed.products });  //state change can be done only using setState()
    }
    handleProductUpVote = (productId) => {
        console.log(productId + 'was upvoted');
        const nextProducts = this.state.products.map((product) => {
          if(product.id === productId){
            return Object.assign({}, product, {   // Object.assign(target, source)
              votes: product.votes + 1,
            });
          } else {
            return product;
          }
        });
        this.setState({
          products: nextProducts
        })
    }

    render() { // invoked when state change
        const products = this.state.products.sort((a,b) => ( 
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onVote = {this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component { // Component based class
    // constructor(props) {
    //     super(props); // to gathers data from parent as props should be available inside the component
    //     this.handleUpVote = this.handleUpVote.bind(this); // to ensure that 'this' keyword points to component
    // }
    // handleUpVote(){
    //     this.props.onVote(this.props.id);
    // }

    handleUpVote = () => {
      this.props.onVote(this.props.id)
    }


    render() { // render() is invoked when there is change in props or state  // by default render() function maps 'this' keyword with component
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl}/>
          </div>
          <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}><i className='large caret up icon'/></a>
            {this.props.votes}
          </div>
            <div className='description'>
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  }

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
)