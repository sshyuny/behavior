package roadiary.behavior.record.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.RequiredArgsConstructor;
import roadiary.behavior.record.dto.RecordReqDto;
import roadiary.behavior.record.service.RecordsService;

@Controller
@RequiredArgsConstructor
public class RecordsController {

    private final RecordsService recordsService;
    
    @GetMapping("/behavior")
    public String directToSave() {
        return "behavior.html";
    }
    
    @PostMapping("/behavior")
    public String saveRecord(@ModelAttribute RecordReqDto recordReqDto) {

        // userId 세션에서 가져오기
        Long userId = 1L;
        
        boolean isItAdded = recordsService.addRecord(recordReqDto, userId);

        System.out.println(isItAdded);

        return "redirect:/behavior";
    }
}
