import {dashboardData, ordersData, productsData, profileData, settingsData, usersData} from '../data/dummyData'
const delay=(ms=500) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// Dashboard api
const getDashboard = async () => {
    await delay();
    return dashboardData;
}

// User api
const getUsers = async (page=1, limit=10) => {
    await delay();
    return usersData.items
}

// Product api
const getProducts = async () => {
    await delay();
    return productsData
}

// Order api
const getOrders = async () => {
    await delay();
    return ordersData;
}

// Settings data
const getSettings = async () => {
    await delay();
    return settingsData;
}

// Profile api
const getProfile = async () => {
    await delay();
    return profileData;
}

export const api = {
    getDashboard,
    getUsers,
    getProducts,
    getOrders,
    getSettings,
    getProducts,
}