import axiosMock from 'axios';

import { getNewsDataAsync } from "./newsDataService";

jest.mock(`axios`);

describe('getNewsDataAsync tests', () => {

    test('should check that the app makes the data call', () => {
        // Arrange
        const testNews = {
            data: {
                results: [{
                    headline: `mock headline`, thumbnail: `mock picture`
                }]
            }
        };
        axiosMock.get.mockResolvedValueOnce(testNews);

        // Act
        getNewsDataAsync();

        // Assert
        expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);
    });

    test('should check that the data request returns the right data.', async () => {
        // Arrange
        const testNews = {
            data: {
                response: {
                    results: [{
                        headline: `mock headline`, thumbnail: `mock picture`
                    }]
                }
            }
        };
        axiosMock.get.mockResolvedValueOnce(testNews);

        // Act
        const result = await getNewsDataAsync();

        // Assert
        expect(result).toEqual(testNews.data.response.results);
    });

    test('should check that in case the right data is not returned, the correct error object is returned', async () => {
        // Arrange
        const error = { error: `Error` };
        axiosMock.get.mockRejectedValueOnce(error);

        // Act
        const result = await getNewsDataAsync();

        // Assert
        expect(result).toEqual(error);
    });
});