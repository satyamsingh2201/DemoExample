import React, { useState, useEffect } from 'react';
import ListViewScreen from './listViewScreen';
import EmptySection from '../../Component/EmptySection';
import LoadingSection from '../../Component/LoadingSection';
import { API_URL, DEFAULT_VIEW_ALL_ITEMS_PER_PAGE } from '../../style-guide/common';

const ListViewContainer = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState<any>(null);

    const fetchData = async (pageNumber: number) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${API_URL}?_page=${pageNumber}&_limit=${DEFAULT_VIEW_ALL_ITEMS_PER_PAGE}`);
            const newData = await response.json();
            setData((prevData: any) => [...prevData, ...newData]);
            setPage(pageNumber + 1);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    const handleLoadMore = () => {
        fetchData(page);
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setData([]);
        setPage(1);
        fetchData(1);
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    if (isLoading && !isRefreshing && data.length === 0) {
        return (
            <LoadingSection />
        );
    }

    if (error) {
        return (
            <EmptySection message={error} />
        );
    }

    return (
        <ListViewScreen
            data={data}
            handleLoadMore={handleLoadMore}
            handleRefresh={handleRefresh}
            isRefreshing={isRefreshing} />
    );
};

export default ListViewContainer;
