package scrapeemojis;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class ScrapeEmojis {
	public static void main(String[] args) {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://apps.timwhitlock.info/emoji/tables/unicode");
		List<WebElement> bytecodes = driver.findElements(By.xpath("//tbody/tr/td[8]")); 
		List<WebElement> names = driver.findElements(By.xpath("//tbody/tr/td[9]")); 
		
		System.out.println(bytecodes.size());
		System.out.println(names.size());
		for (int i = 0; i < bytecodes.size(); i++) {
			System.out.println(bytecodes.get(i).getText() + "," + names.get(i).getText());
		}
	}
}
