<template>
  <div>
    <div class="comments">
        <Loader v-if="loading"/> 
        <h1 class="commentsHead" v-else-if="!comments.length">Comments page is empty.</h1>
        <h1 class="commentsHead" v-else>Comments</h1>
        <div class="commentUnit" 
            v-for="comment of items"
            :key="comment.id"
        >
            <div class="commentUnitLeft">
                <img src="../assets/images/reviewPerson.png" alt="avatar">
            </div>
            <div class="commentUnitRight">
                <blockquote>
                    {{comment.message}}
                </blockquote>
                <div class="commentName">
                    {{comment.userName}}
                </div>
                <div class="commentTime">
                    {{comment.time | date('datetime')}}
                </div>
                <button @click.prevent="deleteComment(comment.id)" v-if="info.id == comment.userId">Remove my comment</button>
            </div>
        </div>
        <div class="paginationWrap">
            <Paginate
            v-model="page" 
            :page-count="pageCount"
            :click-handler="pageChangeHandler"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
            />
        </div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex' 
import paginationMixin from '@/mixins/pagination.mixin'
import messages from '../utils/messages';

export default {
    data: () => ({
        loading: true,
        comments: [],
        info: ''
    }),
    mixins: [paginationMixin],
    computed: {
        gettersComments(){
            return this.setupPagination(this.$store.getters.comments)
        }
    },
    watch: {
        gettersComments(){}
    },
    async mounted() {
        try {
            await this.fetchComments()
            this.info = this.$store.getters.info
            this.comments = this.$store.getters.comments
            this.setupPagination(this.comments)
            this.loading = false;
        } catch (error) {
           // 
        }
     
    },
    methods: {
        ...mapActions(['fetchComments', 'deleteMessage']),
        async deleteComment(idComment){
            try {
                const currentUserId = this.info.id
                const data = await this.deleteMessage({idComment, currentUserId})
                this.$message(messages[data.message])
            } catch (error) {
                //
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/comments.scss';
@import '@/assets/scss/pagination.scss';
</style>