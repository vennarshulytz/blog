# 🚀 FastConvert —— 让你的 Java 对象转换丝滑高效

> **插件下载地址：** [FastConvert Plugin for JetBrains IDEs | JetBrains Marketplace](https://plugins.jetbrains.com/plugin/28433-fastconvert)
> **官方介绍页：** 
>
> - [FastConvert：告别冗长代码，体验对象转换的极速飞跃！-CSDN博客](https://blog.csdn.net/2403_89785620/article/details/151991576)
> - [FastConvert：告别冗长代码，体验对象转换的极速飞跃！- 掘金](https://juejin.cn/post/7552847990438903827)

在日常的 Java 开发中，我们经常需要在不同层级的对象之间进行属性映射，比如从 **VO（View Object）** 转换为 **DTO（Data Transfer Object）**、从 **Entity** 转换为 **BO（Business Object）** 等。这类代码往往充斥着如下冗余的写法：

```java
B b = new B();
b.setName(a.getName());
b.setAge(a.getAge());
b.setAddress(a.getAddress());
// ...
```

这种代码不仅显得冗长、维护困难，还容易因为属性遗漏导致逻辑错误。虽然有像 `BeanUtils` 或 `MapStruct` 这样的工具可以减少手动赋值，但它们也有自己的痛点。

为此，**FastConvert** 插件应运而生 —— 一款专为 **JetBrains IDEA** 设计的对象转换辅助工具，让你的对象转换像「自动补全」一样自然流畅。

------

## 🧩 一、FastConvert 是什么？

**FastConvert** 是一款智能对象转换生成插件，旨在：

> 💡 **让开发者以最直觉的方式完成 Java 对象之间的转换，不需要手动写 setter / getter，也不需要复杂配置。**

无论是单个对象还是集合类型对象，只需在 IDEA 中简单操作，就能一键生成 `toXxx()` 方法，自动完成属性映射。

它的核心理念是：

> “开发者不需要思考『怎么转』，只需告诉 IDE『我要转成谁』。”

------

## ⚙️ 二、FastConvert 功能与使用示例

### 🔹 示例 1：单个对象转换

假设我们有两个类：

```java
public class UserVO {
    private String name;
    private int age;
    private String email;
}

public class UserDTO {
    private String name;
    private int age;
    private String email;
}
```

现在在代码中，我们有一个 `UserVO` 对象，希望将其转换为 `UserDTO`：

```java
UserVO vo = new UserVO();
// ...
UserDTO dto = vo.toUserDTO();
```

此时你可能注意到，`UserVO` 类中**并不存在 `toUserDTO()` 方法**。

👉 **FastConvert 的魔法出现了：**

- IDEA 会自动提示补全方法 `toUserDTO()`
- 当你选择该方法后，插件会自动为你在 `UserVO` 类中生成如下转换方法：

```java
public UserDTO toUserDTO() {
    UserDTO result = new UserDTO();
    result.setName(this.getName());
    result.setAge(this.getAge());
    result.setEmail(this.getEmail());
    return result;
}
```

整个过程几乎不需要手动操作，生成代码即用即得，流畅自然。

![2](img/Convert.assets/2.gif)

------

### 🔹 示例 2：集合对象转换

如果你要将一个 `List<UserVO>` 转换为 `List<UserDTO>`：

```java
List<UserDTO> dtoList = voList.toUserDTOList();
```

即使 `UserVO` 类中没有定义 `toUserDTOList()`，**FastConvert** 也会自动识别并生成对应的转换逻辑：

```java
public static List<UserDTO> toUserDTOList(List<UsertVo> sourceList) {
    List<UserDTO> targetList = new ArrayList<>(sourceList.size());
    for (UserVo item : sourceList) {
        targetList.add(item.toUserDTO());
    }
    return targetList;
}
```

至此，单对象与集合对象的转换都能实现“所写即所得”的开发体验。

![3](img/Convert.assets/3.gif)

------

## ⚡ 三、FastConvert 的核心优势对比

| 对比项         | **FastConvert**                          | **Spring BeanUtils** | **MapStruct**                           |
| -------------- | ---------------------------------------- | -------------------- | --------------------------------------- |
| **性能**       | ✅ 编译期生成，无反射性能损耗             | ❌ 基于反射，性能较差 | ✅ 编译期生成代码                        |
| **学习成本**   | ✅ 零配置，符合直觉                       | ✅ 简单调用           | ❌ 需要掌握注解与映射配置                |
| **代码侵入性** | ✅ 非侵入式，仅在本地生成方法             | ✅ 低                 | ❌ 需额外维护 Mapper 接口及 XML/注解配置 |
| **IDE 友好性** | ✅ 完全整合到 IntelliJ IDEA 自动提示      | ❌ 无智能提示         | ⚠️ 需借助插件支持生成                    |
| **适用场景**   | ✅ 轻量、快速开发项目；中小型项目转换场景 | ⚙️ 临时性属性复制     | 🏗️ 大型项目统一对象映射                  |
| **可读性**     | ✅ 生成可维护 Java 代码                   | ❌ 黑盒操作，不直观   | ⚠️ 可读性中等                            |

### ✅ 优势总结：

1. **性能更优**：与 BeanUtils 不同，FastConvert 不依赖反射，生成的是真实的 Java 代码，性能几乎无损。
2. **使用更轻量**：相较于 MapStruct，无需额外注解、接口定义或编译配置。
3. **学习成本低**：只需会写普通 Java 方法，无需学习额外语法。
4. **IDE 原生体验**：智能提示 + 一键生成，完全融入开发流程。
5. **代码可维护**：生成的转换方法可直接阅读、修改、调试，不存在黑盒逻辑。

------

## 🧭 四、适用场景

| 场景                          | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| 🌱 **快速开发项目**            | 轻量级项目中频繁存在对象互转需求，如 Spring Boot 中 VO ↔ DTO 转换 |
| 🧩 **中台系统领域模型转换**    | 各层对象模型清晰，但转换类繁琐，用 FastConvert 自动生成更高效 |
| 🧠 **教学与学习场景**          | 学习者可借此直观了解属性映射的代码实现逻辑                   |
| 🧪 **原型开发 / MVP 验证阶段** | 快速实现对象互转，无需额外依赖                               |

------

## 🧰 五、安装与使用步骤

1. **打开 IDEA 插件市场**

   > `Settings / Preferences → Plugins → Marketplace`

2. **搜索 “FastConvert”**
    或直接访问插件页面：[FastConvert Plugin for JetBrains IDEs | JetBrains Marketplace](https://plugins.jetbrains.com/plugin/28433-fastconvert)

3. **安装并重启 IDEA**

4. **配置包路径：** 首先，在 `Tools > Fast Convert` 页面中设置实体类所在的包路径，这一步是必须的。

5. **在代码中使用**
    直接输入 `a.toB()`（假设 A、B 为两个类名），按下快捷键提示补全后选择“Generate toB() method”，即可自动生成转换方法。

------

## 💬 六、总结

在过去，我们有：

- `BeanUtils.copyProperties(a, b)` —— 快但黑盒；
- `MapStruct` —— 强大但复杂；
- 现在，我们有 **FastConvert** —— 轻量、直觉、性能优异。

> 在 FastConvert 的帮助下，对象转换不再是枯燥的 setter/getter 重复劳动，而是一个顺滑的开发体验。

------

### 🔗 官方资源

- 📦 **下载地址**：https://plugins.jetbrains.com/plugin/28433-fastconvert
- 📘 **介绍文档**：
  - [FastConvert：告别冗长代码，体验对象转换的极速飞跃！-CSDN博客](https://blog.csdn.net/2403_89785620/article/details/151991576)
  - [FastConvert：告别冗长代码，体验对象转换的极速飞跃！- 掘金](https://juejin.cn/post/7552847990438903827)

------

💡 **总结一句话：**

> “FastConvert 让 Java 的对象转换回归本质 —— 简单、直观、优雅。”

