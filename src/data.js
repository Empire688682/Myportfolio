// data.js
const AllPosts = [
    {
        id: 1,
        title: "Post 1",
        body: "Post1 MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        category: "Social",
        imageSrc: "/socialLife.jpg",
        slug: 'post-1'
    },
    {
        id: 2,
        title: "Post 2",
        body: "Post2 MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        category: "Social",
        imageSrc: "/socialLife.jpg",
        slug: 'post-2'
    },
    {
        id: 3,
        title: "Post 3",
        body: "Post3 MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        category: "Politics",
        imageSrc: "/politics.jpg",
        slug: 'post-3'
    },
    {
        id: 4,
        title: "Post 4",
        body: "Post4 MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        category: "Politics",
        imageSrc: "/politics.jpg",
        slug: 'post-4'
    },
    {
        id: 5,
        title: "Post 5",
        body: "Post5 MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        category: "Food",
        imageSrc: "/food.jpg",
        slug: 'post-5'
    },
    {
        id: 6,
        title: "Post 6",
        body: "Post6 MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
        category: "Food",
        imageSrc: "/food.jpg",
        slug: 'post-6'
    },
];

export const getAllPostSlugs = async () => {
    return AllPosts.map(post => ({ slug: post.slug }));
};

export const getPost = async (slug) => {
    const post = AllPosts.find((post) => post.slug === slug);
    return post;
};
