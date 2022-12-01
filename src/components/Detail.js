import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const coins = useSelector((state) => state.covid);
  const oneCoin = coins.filter((coin) => (coin.show === true));

  return (
    <div className="TableContainer">
      <Link to="/">
        <p className="ArrowContainer"><i className="ArrowLeft" /></p>
      </Link>
      <div><h1 className="Header">Crypto Currencies</h1></div>
      <table>
        <div className="ContainerCoins">

          {oneCoin.map((coin) => (
            <tr key={coin.baseSymbol} className="Row">
              <td>
                Coin name:
                {' '}
                {coin.baseSymbol}
              </td>
              <td>
                Base id:
                {' '}
                {coin.baseId}
              </td>
              <td className="Price">
                Price:
                {' '}
                {coin.priceUsd}
              </td>
              <td>
                Market name:
                {' '}
                {coin.exchangeId}
              </td>
              <td>
                MarketPrice:
                {coin.priceUsd}
              </td>
              <td>
                Abbrevation:
                {' '}
                {coin.quoteSymbol}
              </td>
              <td>
                Rank:
                {' '}
                {coin.rank}
              </td>

            </tr>
          ))}
        </div>
      </table>
    </div>

  );
};

export default Detail;
