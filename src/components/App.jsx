import { getImages } from 'api/image';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { LoadMoreBtn } from './Button/Button';
import { RotatingLines } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export class App extends Component {
  LIMIT = 12;

  state = {
    showModal: false,
    activeItem: null,
    images: [],
    page: 1,
    isLoading: false,
    error: '',
    query: '',
  };

  componentDidMount() {
    this.loadMoreImages();
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.loadMoreImages();
    }
  }

  loadMoreImages = async () => {
    const skip = this.state.page * this.LIMIT - this.LIMIT;

    try {
      this.setState({ isLoading: true });

      const data = await getImages(
        this.state.query,
        this.state.page,
        this.LIMIT,
        skip
      );

      this.setState(prev => ({
        images: prev.images.length ? [...prev.images, ...data] : data,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleSearch = query => this.setState({ query, page: 1, images: [] });

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showModal = id => this.setState({ showModal: true, activeItem: id });

  hideModal = () => this.setState({ showModal: false, activeItem: null });

  getActiveImage = id => {
    const imageData = this.state.images.find(item => item.id === id);

    if (!imageData) return null;

    return <img src={imageData.largeImageURL} alt={imageData.alt} />;
  };

  render() {
    const { images, isLoading, showModal, activeItem } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery onClick={this.showModal} imgArr={images} />

        {images.length >= this.LIMIT ? (
          <LoadMoreBtn loadMore={this.handleLoadMore} />
        ) : null}

        {isLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            className="Loader"
          />
        ) : null}

        <Modal
          show={showModal && typeof activeItem === 'number'}
          onHide={this.hideModal}
        >
          {this.getActiveImage(activeItem)}
        </Modal>
      </div>
    );
  }
}
