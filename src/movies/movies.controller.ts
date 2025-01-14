import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }
    // @Get('serach')
    // serach(@Query('year') serachingYear: string) {
    //     return `We are searching for a movie made after ${serachingYear}`;
    // }
    @Get(':id')
    getOne(@Param('id') movieId: string): Movie {
        return this.moviesService.getOne(movieId);
    }
    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }
    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }
    @Patch(':id')
    pathch(@Param('id') movieId: string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }
}
