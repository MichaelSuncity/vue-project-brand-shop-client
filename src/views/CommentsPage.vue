<template>
  <div>
    <div class="containerWrap">
      <CommentsList />
      <CommentsCreate />
    </div>
  </div>
</template>

<script>
import CommentsList from '@/components/CommentsList';
import CommentsCreate from '@/components/CommentsCreate';

export default {
  metaInfo() {
      return {
          title: this.$title('Comments')
      }
  },
  name:'comments',
  components: {
    CommentsList, CommentsCreate
  },
}
</script>
