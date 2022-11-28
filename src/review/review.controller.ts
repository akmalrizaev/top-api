import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:productId')
	async getProduct(@Param('productId') productId: string) {

	}
}
