const viacep = require('../api/viacep');
const giphy = require('../api/giphy');

describe('Via cep api', () => {
  describe('#getAddressByZipcode(37200000)', () => {
    it('should get city data', async () => {
      const response = await viacep.getAddressByZipcode('37200000');
      expect(response).toBeDefined();
      expect(response.localidade).toEqual('Lavras');
    });
  });
  describe('#getAddressByZipcode with invalid zipCode', () => {
    it('should return error', async () => {
      const response = await viacep.getAddressByZipcode('37200123');
      expect(response).toBeDefined();
      expect(response.erro).toBe(true);
    });
  });
});

describe('Giphy api', () => {
  describe('#getGifFromGiphy()', () => {
    it('should get city date', async () => {
      const response = await giphy.random('37200000');
      expect(response.data).toBeDefined();
      expect(response.data.image_url).toBeDefined();
    });
  });
});
