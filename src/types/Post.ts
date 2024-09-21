// src/types/Post.ts
export interface Post {
	id: string; 
	data: {
	  title: string;
	  description: string;
	  publishDate: string;
	};
	body: string;
  }
  