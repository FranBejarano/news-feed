import { render, screen } from '@testing-library/react';

import NewsList from "./NewsList";
import { getNewsDataAsync } from "../../utils/newsDataService";

describe('NewsList tests', () => {
    test('should display "News are loading" when there is no data to display', () => {
        // Arrange

        // Act
        render(<NewsList news={[]} />);

        // Assert
        expect(screen.getByText(/data is loading.../i)).toBeInTheDocument();
    });

    test('should display the feed of news when there are news', async () => {
        // Arrange
        const newsTest = await getNewsDataAsync();
        render(<NewsList news={newsTest} />);
        const newsList = screen.getAllByRole(`img`);

        // Act

        // Assert
        expect(newsList.length).toBe(newsTest.length);
    });

});