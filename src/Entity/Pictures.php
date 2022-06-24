<?php

namespace App\Entity;

use App\Repository\PicturesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PicturesRepository::class)]
class Pictures
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $title_picture;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $category;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $theme;

    #[ORM\ManyToOne(targetEntity: Pages::class, inversedBy: 'pictures')]
    #[ORM\JoinColumn(nullable: false)]
    private $Pages;

    // #[ORM\ManyToOne(targetEntity: Users::class, inversedBy: 'pictures')]
    // #[ORM\JoinColumn(nullable: false)]
    // private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitlePicture(): ?string
    {
        return $this->title_picture;
    }

    public function setTitlePicture(string $title_picture): self
    {
        $this->title_picture = $title_picture;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(?string $theme): self
    {
        $this->theme = $theme;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPages(): ?Pages
    {
        return $this->Pages;
    }

    public function setPages(?Pages $Pages): self
    {
        $this->Pages = $Pages;

        return $this;
    }
}
