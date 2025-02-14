<template>
    <div>
        <input type="text" v-model="question" placeholder="Stel een vraag aan de Google Ai over de geselecteerde foto's" />
        <button @click="getResponse">Ask AI</button>
        <div v-if="response">
            <p>{{ response }}</p>
        </div>
        <div class="image-grid">
            <div v-for="image in images" :key="image.id" class="image-item"
                :class="{ selected: selectedImages.includes(image) }" @click="toggleSelection(image)">
                <img :src="getUrl(image.url)" :alt="image.title" />
                <h3>{{ image.title }}</h3>
                <p>{{ image.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>

const strapiUrl = "https://strapidockerapp-6b182a47420b.herokuapp.com/api/photos?populate=*";
const baseUrl = "https://strapidockerapp-6b182a47420b.herokuapp.com";

export default {
    data() {
        return {
            images: [
            ],
            selectedImages: [],
            question: '',
            response: ''
        };
    },
    //on openiong the page, the images are collected via the fetch method wit the url https://strapidockerapp-6b182a47420b.herokuapp.com/api/plaatje?populate=*
    async created() {
        try {
            const response = await fetch(strapiUrl);
            const d = await response.json();
            
            const plainData = [...d.data];
            console.log(plainData);
            //the images are stored in the data variable data[i].MediaFile.formats.small.url is the url of the image
            //data[i].Title is the title of the image
            this.images = plainData.map(image => ({
                url: image.MediaFile.formats.thumbnail.url,
                title: image.Title
            }));
            console.log(this.images);

        } catch (error) {
            console.error('Error fetching images:', error);
        }
    },
    methods: {
        getUrl(url) {
            return `${baseUrl}${url}`;
        },
        toggleSelection(image) {
            const index = this.selectedImages.indexOf(image);
            if (index > -1) {
                this.selectedImages.splice(index, 1);
            } else {
                this.selectedImages.push(image);
            }
        },
        async getResponse() {
            if (this.selectedImages.length === 0 || !this.question) {
                alert('Please select images and ask a question.');
                return;
            }
            try {
                const formData = new FormData();
                this.selectedImages.forEach(image => formData.append('images', image.url));
                formData.append('question', this.question);

                const response = await fetch('https://api.google.com/generative-ai', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                this.response = data.answer;
            } catch (error) {
                console.error('Error fetching response:', error);
            }
        }
    }
};
</script>

<style>
.image-grid {
    display: flex;
    flex-wrap: wrap;
}

.image-item {
    margin: 10px;
    cursor: pointer;
}

.image-item.selected {
    border: 2px solid blue;
}
</style>
