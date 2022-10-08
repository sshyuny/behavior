package roadiary.behavior.category.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import roadiary.behavior.category.dto.CategoryReqDto;
import roadiary.behavior.category.dto.CategoryResDto;
import roadiary.behavior.category.service.CategoryService;

@RestController
public class CategoryRestController {

    private final CategoryService categoryService;
    
    public CategoryRestController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/categories")
    public List<CategoryResDto> getCategories() throws Exception {

        // userId 세션에서 가져오기
        Long userId = 1L;

        List<CategoryResDto> categoryResDtos = categoryService.getCategoryList(userId);

        return categoryResDtos;
    }

    @DeleteMapping("/categories")
    public void deleteCategories(@RequestBody CategoryReqDto categoryReqDto) {

        // userId 세션에서 가져오기
        Long userId = 1L;

        categoryReqDto.setUserId(userId);
        categoryService.deleteAndSortPriority(categoryReqDto);
    }
    
}
