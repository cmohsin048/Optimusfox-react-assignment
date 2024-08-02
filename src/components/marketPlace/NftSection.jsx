import React, { useEffect, useState } from 'react';
import axios from 'axios';
import author from '../../assets/author.png';
import Loader from '../Loader';
import ModalComponent from './ModalComponent';

export function NftSection() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/nfts')
      .then(response => {
        setNfts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleNftAdded = (newNft) => {
    setNfts((prevNfts) => [...prevNfts, newNft]);
  };

  const handleNftUpdated = (updatedNft) => {
    setNfts((prevNfts) =>
      prevNfts.map((nft) => (nft.id === updatedNft.id ? updatedNft : nft))
    );
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/nfts/${id}`);
      setNfts((prevNfts) => prevNfts.filter((nft) => nft.id !== id));
    } catch (error) {
      console.error('Error deleting NFT:', error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error || nfts.length === 0) {
    return <div className='loader'>No data found</div>;
  }

  return (
    <div>
      <ModalComponent
        onNftAdded={handleNftAdded}
        selectedNft={selectedNft}
        onNftUpdated={handleNftUpdated}
      />
      <div className='grid xlm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-8'>
        {nfts.map((nft) => (
          <NftCard key={nft.id} nft={nft} onEdit={() => setSelectedNft(nft)} onDelete={() => handleDelete(nft.id)} />
        ))}
      </div>
    </div>
  );
}

function NftCard({ nft, onEdit, onDelete }) {
  return (
    <div className='card border border-secondary-border rounded-xl border-solid p-2'>
      <div>
        <img className='w-full h-[200px]' src={nft.image} alt='nft' />
      </div>
      <div className='pt-2 flex flex-col gap-1'>
        <span className='text-sm text-[#A1A1AA]'>{nft.title}</span>
        <h1>{nft.rank}</h1>
      </div>
      <div className='py-2 mt-3 flex justify-between rounded-xl px-3 bg-zinc-800 items-center'>
        <div className='flex flex-col gap-1'>
          <span className='text-xs text-[#A1A1AA]'>Author</span>
          <div className='text-sm xl:text-base flex gap-1'>
            <img src={author} alt='author' />
            <p>{nft.author}</p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-xs text-[#A1A1AA]'>Price</span>
          <div className='text-sm xl:text-base flex gap-1 items-center'>
            <div className='flex gap-1'>
              <p>{nft.price_eth}</p>
              <span>ETH</span>
            </div>
            <span className='text-[#A1A1AA] text-xs'>${nft.price_usd}</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-2'>
        <button onClick={onEdit} className='bg-zinc-800 text-white px-2 py-1 rounded'>
          Edit
        </button>
        <button onClick={onDelete} className='bg-zinc-800 text-white px-2 py-1 rounded'>
          Delete
        </button>
      </div>
    </div>
  );
}
