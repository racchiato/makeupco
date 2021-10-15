## MakeUp E-Commerce Challenge

### The Challenge

Is to create an e-commerce website of beauty products utilizing the API from this [makeup-api](makeup-api.herokuapp.com), to be completed within 8 hours.

### Approach to Problems


#### Making Mockup Design

I just sketched the design on my journal based on the project I previously did [here](moreskinidofficial.co.id). Components splitting plan was done here also


#### Analyzing The Problems

The given API only has one endpoint, which is to get the products. It is however has some filter parameters that you can use to filter the products. Then the idea that came to my mind was `I think it's better if I could paginate the response since Next.js has API routes`. Being server-side rendered, I thought it wouldn't be a problem if the server takes the hard work and seeing it from user perspective, all I know is that it's working fast and easy.


#### Decision

Given the analysis that I did, I decided to make my own API that takes two more params which is `page` and `limit`. I also made an API with `id` param to get specific product information. For the homepage and the product details, I will use SSG so it would be readily served in build time, and for browsing I decided to use SSR on first load, and CSR for the rest.


### The Obstacles

When I'm done, I was going to deploy it to Vercel. I encountered some problems which is:

- SSG product detail pages building got a lot of `503` errors because of the API limitation, and also the fact that some product has missing details so it failed to render. Home was working fine after I changed it to SSR for product details
- Even with SSR, the `All Products` page would give timeout.
- Same with previous point, the `Product Detail` page couldn't load because of the API speed. But it's also my fault because I didn't think to filter it using `product_type` or `brand` so it cost less time to consume


### The Missing Points from the Requirements / Bugs

- Multiple Images - I could've easily made it using Bootstrap `Carousel` but I didn't do it because it's my mistake for looking in the payload, forgetting the requirements
- When in `All Products` page, you can't navigate using the `Categories` navigation menu, which could be troublesome in mobile
- Refer to obstacles for the SSR and SSG problems


### Self-Evaluation / Lesson Learned

- The most important point that I learned is that I really need to thoroughly evaluate the API features and peformance first before deciding what to use
- Always test for production build in all the development progress, it would be easier to fix bugs


### Remarks

I'm actually very grateful for the challenge given, I learned a lot by my mistakes in this challenge.
